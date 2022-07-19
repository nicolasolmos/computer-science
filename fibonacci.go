package main
import "fmt"
// TODO: check why is it showing negative values with the big numbers. I assume it is because of the overflow.
func main() {
	var a = 0;
	var b = 1;
	for x := 0; x < 1000; x++ {
		if x % 2 == 0 {
			fmt.Println("value: ", a);
			b = a + b;
		} else {
			fmt.Println("value: ", b);
			a = a + b;
		}
	}
}
