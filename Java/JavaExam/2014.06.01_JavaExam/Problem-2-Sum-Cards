import java.util.Scanner;

public class SumCards {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String cardsSequence = input.nextLine();
		String[] cards = cardsSequence.split(" ");
		int sum = 0;
		int prevValue = -1;
		int count = 0;
		for (String card : cards) {
			int value = getCardValue(card);
			if (value == prevValue) {
				count++;
			} else {
				count = 1;
			}
			sum = sum + value;
			if (count == 2){
				sum = sum + 2 * value;
			}
			if (count > 2) {
				sum = sum + value;
			}
			prevValue = value;
		}
		
		System.out.println(sum);
	}

	private static int getCardValue(String card) {
		if (card.startsWith("2")) return 2;
		if (card.startsWith("3")) return 3;
		if (card.startsWith("4")) return 4;
		if (card.startsWith("5")) return 5;
		if (card.startsWith("6")) return 6;
		if (card.startsWith("7")) return 7;
		if (card.startsWith("8")) return 8;
		if (card.startsWith("9")) return 9;
		if (card.startsWith("10")) return 10;
		if (card.startsWith("J")) return 12;
		if (card.startsWith("Q")) return 13;
		if (card.startsWith("K")) return 14;
		if (card.startsWith("A")) return 15;
		throw new IllegalArgumentException("Invalid card: " + card);
	}

}
