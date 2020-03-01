local ok, new_tab = pcall(require, "table.new")
if not ok or type(new_tab) ~= "function" then
    new_tab = function (narr, nrec) return {} end
end

local _M = new_tab(0, 54)

function _M.urlEncode(s)  
     s = string.gsub(s, "([^%w%.%- ])", function(c) return string.format("%%%02X", string.byte(c)) end)  
    return string.gsub(s, " ", "+")  
end  

function _M.urlDecode(s)  
    s = string.gsub(s, '%%(%x%x)', function(h) return string.char(tonumber(h, 16)) end)  
    return s  
end  

--微信报警页面地址
function _M.weixin110()
	--return "https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=205&source=1&url=http%3A%2F%2Fa.66xiaoyao.com%2F#wechat_redirect"
	return "https://xw.qq.com"
end

--防封层级关系redis存储key存活时间
function _M.keyExpire()
	return 10
end

local r_ipaddr = '10.8.111.182'
local r_port = '6379'
local r_auth = 'ShiYin-Go2099'
function _M.getRedis(ngx)
	local redisM = require "resty.redis"
        --redis链接
        local redis = redisM.new()
        local ok, err = redis.connect(redis, r_ipaddr, r_port)
        redis:set_timeout(60000)

        --redis auth
        local count
        count, err = redis:get_reused_times()
        if 0 == count then
                ok, err = redis:auth(r_auth)
        if not ok then 
                ngx.say("failed to auth: ", err) 
                return
        end
        elseif err then
                ngx.say("failed to get reused times: ", err) 
                return
        end
	
	return redis
end

--获取随机落地域名
function _M.getRandomDomain(cache, ngx, key)
	local num, err = cache:llen(key)
        --ngx.say("redis res len:", num)
        math.randomseed(tostring(os.time()):reverse():sub(1, 6))
        local random_num = math.random(0, num-1)
        --ngx.say("redis res random_num:", random_num)
        local res, err = cache:lrange(key, random_num, random_num)
        --ngx.say("redis res:", res)
        if not res then
                ngx.say("failed to get redis key: ", err)
                return
        end
        if res == ngx.null then
                ngx.say("key not found.")
                return
        end
	return res
end

--获取最终跳转url
function _M.getFinalUrl(http, appid, res, key, request_uri)

        local final_url = http..appid.."."..table.concat(res)..request_uri

        if is_beizai == "beizai" then
                if string.find(final_url, '?') == nil then
                        final_url = http..appid.."."..table.concat(res)..request_uri.."?origin_zhongzhuan="..key
                else
                        final_url = http..appid.."."..table.concat(res)..request_uri.."&origin_zhongzhuan="..key
                end
        end
	
	return final_url

end

--防封跳转落地，通用代码
function _M.jumpLuodi(originalUri, originalUrl, redis_key, zz, cache, ngx)
    local request_uri = originalUri
    local appid = redis_key
    local http = ngx.var.scheme .. "://";
    local is_beizai = nil

    --随机取落地域名
    local num, err = cache:llen(zz)
    math.randomseed(tostring(os.time()):reverse():sub(1, 6))
    local random_num = math.random(0, num-1)
    local res, err = cache:lrange(zz, random_num, random_num)

    if not res then
            ngx.say("failed to get redis key: ", err) 
            return
    end

    if res == ngx.null then
            ngx.say("key not found.")
            return
    end


    --如果没有对应的落地域名，取灾备中转域名
    if next(res) == nil then
            res, err = cache:lrange("zaibeizhongzhuan", 0, 0)
            is_beizai = "beizai"
    end


    --关闭redis 
    local ok, err = cache:close()
    if not ok then 
            ngx.say("failed to close:", err)
            return
    end


    --拼接新的域名
    local final_url = http..appid.."."..table.concat(res)..request_uri

    --如果备灾，备灾域名拼接
    if is_beizai == "beizai" then
            local ff = '&'
            if string.find(final_url, '?') == nil then
                    ff = '?'
            end
            final_url = http..appid.."."..table.concat(res)..originalUrl..ff.."origin_zhongzhuan="..zz
    end

    return ngx.redirect(final_url);

end

function _M.banTxIp(redis, ngx)
	local ip = _M.getIp(ngx)
        local iptable = _M.split(ip, "%.")
        local ipNumber = _M.buweiIP(ip)
        local ips = redis:get("TXIP_"..iptable[1])
        if ips ~= ngx.null then
                ips = _M.split(ips, "+++")
                for i=1,#ips do
                        s=false
                        e=false
                        ips_info = loadstring("return " .. ips[i])()
                        for k,v in pairs(ips_info) do
                                if k==1 and ipNumber>=tonumber(v) then
                                        s=true
                                end
                                if k==2 and ipNumber<=tonumber(v) then
                                        e=true
                                end
                        end
                        if s and e then
                                redis:lpush("fengjin-ips", ip)
                                return ngx.redirect(_M.randomJumpUrl())
                        end
                        s=false
                        e=false
                end
        end

end

function _M.buweiIP(ip)
        local iptable = _M.split(ip,"%.");
        local ipint = ''
        for k=1,#iptable do
        	local _len = string.len(iptable[k]);
        	if k>1 then
                	if _len == 2 then
                        	iptable[k] = '0'..iptable[k];
                	elseif _len == 1 then
                        	iptable[k] = '00'..iptable[k];
                	end
	        end
        	ipint = ipint..iptable[k];
        end
	return tonumber(ipint)
end

function _M.randomJumpUrl()
    urls = {
	"https://www.appinn.com/linux-probe-pdf-book/",
	"https://www.appinn.com/couch-potato-for-iphone/",
	"https://www.appinn.com/gboard-sync-android/",
	"https://www.appinn.com/chrome-qr/",
	"https://www.appinn.com/race-journal-for-iphone/",
	"https://www.appinn.com/impocall-calendar-event-call-remind-for-ios/",
	"https://www.appinn.com/thyme-for-maocs/",
	"https://www.appinn.com/microsoft-mtutorclientandroidspokenenglish/",
	"https://www.appinn.com/trippo-for-iphone/"
    }
    math.randomseed(os.time())
    return urls[math.random(1,#urls)]
end

function _M.split(str,reps)
    local resultStrList = {}
    string.gsub(str,'[^'..reps..']+',function ( w )
        table.insert(resultStrList,w)
    end)
    return resultStrList
end

function _M.getIp(ngx)
    --由于使用代理原因产生的客户端ip地址不准确
    --优先取真实ip=>http_x_forwarded_for(使用代理时该值为真实ip,不使用代理时该值为空)
    --取不到在取客户端ip=>remote_addr
    local ip = ngx.var.http_x_forwarded_for

    --ngx.say('ip:',ip)
    if ip == nil then
            ip = ngx.var.remote_addr
    end
    --ngx.say('ip:',ip)
    return ip
end

return _M
