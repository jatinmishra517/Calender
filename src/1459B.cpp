#include<iostream>
#include<cmath>
using namespace std;
int mod(int a){
    if(a<0){
        return -1*a;
    }
    return a;
}
int main(int argc, char const *argv[])
{
    int n;
    cin>>n;
    int k=ceil(n*1.0/2);
    int count=0;
    for(int i=(-k);i<=k;i++){
        for(int j=(-k);j<=k;j++){
            if((n-mod(i)-mod(j))%2==0){
                count++;
            }

        }
    }
    if(n==2){
        count--;
    }
    cout<<count<<endl;
    
    return 0;
}
