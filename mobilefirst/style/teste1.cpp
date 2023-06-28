#include <iostream>
using namespace std;
int main(){
    int cont = 0;
    int *vector = new int[4];
   
    for(int i=0; i<4;i++){
    cout<<"Digite um elemento:";
    cin>>vector[i];
    }
    
for(int j=0; j<sizeof(vector);j++){
      
       
        while (cont<2){

           if(vector[j]>14){
            
            cout<<vector[0]<<"  "<<vector[2];
            break;
            }
            if(cont==1){ 
            break;
                }       
         cont+=1; /* code */
        }
        
         
        
        

    } 

}