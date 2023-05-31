function func1() {
 console.log('one');   
}

function func2() {
    console.log('two');
}

// func1(func2());
func2(func1())