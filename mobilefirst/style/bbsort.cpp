#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 8, 12, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
  
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca de elementos
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
  
    // Imprime o array ordenado
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
  
    return 0;
}
