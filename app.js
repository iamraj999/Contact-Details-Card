const data = [{
        "name": "Fred Smith",
        "email": "fred@smith.com",
        "phone": "206-555-1212",
        "www": "http:\/\/www.fredsmith.com"
    },
    {
        "name": "Jimmy Fourtoes",
        "email": "jimmy@fourtoes.com",
        "phone": "206-555-4444",
        "www": "http:\/\/www.jimmyswebsite.com"
    },
    {
        "name": "Joe Nutz",
        "email": "joey@3nuts.com",
        "phone": "206-555-2121",
        "www": "http:\/\/www.joooooey.com"
    },
    {
        "name": "Kathy Pinkeye",
        "email": "katwoman@yuck.com",
        "phone": "206-555-7777",
        "www": "http:\/\/www.pinkeyeisgross.com"
    },
    {
        "name": "Susan Jones",
        "email": "suzie@jones.com",
        "phone": "206-555-5454",
        "www": "http:\/\/www.thejonesfamily.com"
    }
];

const wrapper = document.getElementById('wrapper');
for (let i = 0; i < data.length; i++) {
    let container =createElement('div','container','');
    let inner = createElement('div','inner','');
    let name = createElement('h3','name',data[i].name);
    let phone = createElement('p','phone',data[i].phone);
    let email = createElement('p','left',data[i].email);
    let web = createElement('p','right',data[i].www);
    inner.appendChild(name);
    inner.appendChild(phone);
    container.appendChild(inner);
    container.appendChild(email);
    container.appendChild(web);
    wrapper.appendChild(container);
}

function createElement(type, addClass, data) {
    let temp = document.createElement(type);
    temp.classList.add(addClass);
    temp.innerHTML = data;
    return temp;
}