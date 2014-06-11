import java.util.Scanner;

public class CountBeers {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int totalBeers = 0;
		while (true) {
			String orderLine = input.nextLine();
			if (orderLine.equals("End")) {
				break;
			}
			String[] order = orderLine.split(" ");
			int beers = Integer.parseInt(order[0]);
			if (order[1].equals("stacks")) {
				beers *= 20;
			}
			totalBeers += beers;
		}
		System.out.printf("%d stacks + %d beers\n",
			totalBeers / 20, totalBeers % 20);
	}

}
