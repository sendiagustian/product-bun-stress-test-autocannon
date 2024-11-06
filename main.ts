import autocannon, { type Instance } from "autocannon";

const runBenchmark = async () => {
    const url = "https://api-gpi-dev.protonema.co.id/api/v1/version"; // replace with your target URL

    // Configure autocannon options for POST request
    const opts: autocannon.Options = {
        url,
        connections: 1000, // Number of concurrent connections
        pipelining: 10, // Number of pipelined requests
        duration: 120, // Test duration in seconds
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        // body: JSON.stringify({
        //     email: "sensen@gmail.com",
        //     password: "12345678"
        // })
    };

    // Start autocannon and handle events
    const instance: Instance = autocannon(opts, (err, results) => {
        if (err) {
            console.error("Benchmark failed:", err);
        } else {
            console.log("Benchmark results:", results);
        }
    });

    autocannon.track(instance, { renderProgressBar: true });
};

runBenchmark();
