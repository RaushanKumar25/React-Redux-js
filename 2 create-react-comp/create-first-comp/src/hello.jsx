function Hello() {

    let myName = 'roshan';
    let fullName = `Mr. ${myName} Sharma`;
    let number = 12306115;
    return <h3>
        Hello,react! How are you today? 
        I am your friend {fullName} 
        my id number is {number}
    </h3>
}

export default Hello;