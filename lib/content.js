//import sqlite3 from 'sqlite3'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
fs = require('fs');

(async () => {
    let content;

    const db = await sqlite.open({
      filename: './lib/db.sqlite',
      driver: sqlite3.Database
    })
    const categories = await db.all("SELECT * FROM category");
    //console.log(categories);
    content = categories;
    for(let i in categories) {
        items = await db.all("SELECT * FROM items WHERE category_id='"+categories[i].id+"'");
        content[i].items = items;
        for(let j in items) {
            links = await db.all("SELECT * FROM links WHERE item_id='"+items[j].id+"'");
            content[i].items[j].links = links
        }
    }
    console.log(content);
    fs.writeFile('./lib/content.json', JSON.stringify(content), function (err) {
        if (err) return console.log(err);
        console.log('Exported ./lib/content.json');
    });
})()
