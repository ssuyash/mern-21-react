/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include<ctype.h>
#include <string.h>


int main()
{
   char S[100];
   scanf("%s", S);
   
   
   char len_char = S[0];
   char nums_in_str[10];
  
   
   int i;
   for(i=0; i<strlen(S); i++){
       
       if(S[i] >= '0' && S[i] <= '9'){
           nums_in_str[i] = S[i];
       }else{
           break;
       }
   }
   
   int nums_in_str_int = atoi(nums_in_str);
   
   
   int str_len = strlen(S);
   //printf("%d", str_len);
   int num_len = strlen(nums_in_str);
   
   int remain_char = str_len - num_len;
   
   //printf("%d %d %d", remain_char, nums_in_str_int, str_len);
   
   if(remain_char == nums_in_str_int){
       printf("TRUE %d", nums_in_str_int);
   }else{
       printf("FALSE %d", str_len);
   }
  
}


