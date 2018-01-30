getWordOfTheDay()
.then((word) => {
    console.log(`The word of the day is ${word}.`);
    console.log('sending to friend');
    tellFriend(word)
    .then((response) => {
        console.log('friend responded:');
        console.log(response);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});
