function generateGeoJSON(name, latitude, longitude) {
    return {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            properties: {
                name
            },
            geometry: {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }
        }]
    };
}

exports.handler = (event, context, callback) => {
    // Retrieve our payload contents
    const { queryStringParameters } = event;
    const { name, latitude, longitude } = queryStringParameters;
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
    // Configure static properties for response
    const response = {
        'headers': {
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
        },
        'isBase64Encoded': false
    };
    // Error check
    if (isNaN(lat) || isNaN(lon)) {
        response.statusCode = 400;
        response.body = JSON.stringify({ error: 'Not a number' });
        callback(null, response);
    } else {
        // Our GeoJSON template
        const geojson = generateGeoJSON(name, lat, lon);
        response.statusCode = 200;
        response.body = JSON.stringify(geojson);
        callback(null, response);
    }
};
