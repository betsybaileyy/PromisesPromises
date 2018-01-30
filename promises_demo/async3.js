getWordOfTheDay()
.then((word) => {
    console.log(`The word of the day is ${word}.`);
    console.log('sending to friend');
    return tellFriend(word);
}).then((response) => {
    console.log('friend responded:');
    console.log(response);
}).catch((err) => {
    console.log(err);
});
