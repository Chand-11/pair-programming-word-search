const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    let string = [];
    for (let i=0 ; i < letters[i].length; i++)
    {
        let temp;
        for(let j=0 ; j < letters.length; j++)
        {
            temp += letters[j][i];
        }
        string.push(temp);
    }
    for (const each of string) {
        if(each.includes(word))
        {
            return true;
        }
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) {
        return true
    }
    }
    return false;
}
module.exports = wordSearch;