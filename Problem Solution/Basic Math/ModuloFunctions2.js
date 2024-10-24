// Chef has recently started playing chess. He completes a game of chess in 30 minutes. Chef has a total of N minutes of available time. He will utilize the maximum possible time to play. He will not plan incomplete games - if there is insufficient time remaining to play a game, he will not play the game. How many complete games with Chef be able to play and how much spare time will remain?






process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let N = parseInt(input[i]);
        const total_games = parseInt(N/30);
        const remaining_time = N % 30;
        console.log(total_games+" "+remaining_time);
    }
});