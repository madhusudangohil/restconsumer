http = require('http');

exports.getAllCountires = function(callback)
{
    http.get('http://services.groupkt.com/country/get/all', function(response){
        var body = '';
        response.on('data', function(data){           
            body += data.toString('utf8');
        });

        response.on('end', function(data){           
            var parsed = JSON.parse(body);

            callback(parsed.RestResponse.result);
        });
    });
}


exports.getAllStates = function(countryCode, callback)
{
    http.get('http://services.groupkt.com/state/get/' + countryCode + '/all', function(response){
        var body = '';
        response.on('data', function(data){           
            body += data.toString('utf8');
        });

        response.on('end', function(data){           
            var parsed = JSON.parse(body);
            callback(parsed.RestResponse.result);
        });
    });
}