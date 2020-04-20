import React, { useState, useEffect } from 'react';

function GetRequestHooks() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.coronatracker.com/v3/stats/worldometer/topCountry?limit=15&sort=-confirmed')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.total));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                Total react packages: {totalReactPackages}
            </div>
        </div>
    );
}

export default GetRequestHooks;