//for in

const myobj={
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: 'switf by apple'

}
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);

}

const program=["js", "rb", "java", "cpp" ]
for(const key in program){
    console.log(program[key]);
    
}
