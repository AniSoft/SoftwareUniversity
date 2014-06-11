import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Scanner;

public class StuckNumbersFast {

	public static void main(String[] args) {		
		int[] nums = readInputNumbers();		
		HashMap<String, ArrayList<String>> pairsMap = collectPairs(nums);		
		findAndPrintStuckNumbers(pairsMap);
	}

	/**
	 * Read a sequence of n integers from the console
	 */
	private static int[] readInputNumbers() {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		int[] nums = new int[n];
		for (int i = 0; i < nums.length; i++) {
			nums[i] = scanner.nextInt();
		}
		return nums;
	}

	/**
	 * Collect all pairs of numbers in a HashMap, along with their
	 * compound numbers in format "num1|num2"
	 */
	private static HashMap<String, ArrayList<String>> collectPairs(int[] nums) {
		HashMap<String, ArrayList<String>> pairs = new HashMap<>();
		for (int num1 = 0; num1 < nums.length; num1++) {
			for (int num2 = 0; num2 < nums.length; num2++) {
				int a = nums[num1];
				int b = nums[num2];
				if (a != b) {
					String pairValue = a + "" + b;
					String pair = a + "|" + b;
					if (pairs.containsKey(pairValue)) {
						pairs.get(pairValue).add(pair);
					} else {
						ArrayList<String> pairsList = new ArrayList<>();
						pairsList.add(pair);
						pairs.put(pairValue, pairsList);
					}
				}
			}
		}
		return pairs;
	}	

	/**
	 * Find and print all stuck numbers {a, b, c, d} from the pairsMap
	 */
	private static void findAndPrintStuckNumbers(
			HashMap<String, ArrayList<String>> pairsMap) {
		int count = 0;
		for (Entry<String, ArrayList<String>> entry : pairsMap.entrySet()) {
			ArrayList<String> pairs = entry.getValue();
			for (int first = 0; first < pairs.size(); first++) {
				String firstPair = pairs.get(first);
				String[] firstPairNums = firstPair.split("\\|");
				int a = Integer.parseInt(firstPairNums[0]);
				int b = Integer.parseInt(firstPairNums[1]);
				for (int second = 0; second < pairs.size(); second++) {
					if (first != second) {
						String secondPair = pairs.get(second);
						String[] secondPairNums = secondPair.split("\\|");
						int c = Integer.parseInt(secondPairNums[0]);
						int d = Integer.parseInt(secondPairNums[1]);
						if (a != b && a != c & a != d && 
								b != c && b != d && c != d) {
							System.out.printf("%d|%d==%d|%d\n",
								a, b, c, d);
							count++;
						}
					}
				}
			}
		}
		
		if (count == 0) {
			System.out.println("No");
		}
	}

}
