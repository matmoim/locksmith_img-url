const generate = () => process.argv.slice(2).map(name => ({
"name": `${name}`,
"adress": `${name}`,
"phone": `${name}`,  
"mail": `${name}`,
"link_to_site": `${name}`,
"link_to_map": `${name}`,
"services": [`${name} service 1`, `${name} service 2`],
"open_at": "2011-10-05T14:48:00.000Z",
"close_at": "2011-10-05T14:48:00.000Z",
"monday": true,
"tuesday": true,
"wednesday": true,
"thursday": true,
"friday": true,
"saturday": true,
"sunday": true,
}));

console.log(JSON.stringify(generate(), null, ' '));
