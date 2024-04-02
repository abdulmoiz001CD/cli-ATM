#! /usr/bin/env node

import inquirer from "inquirer";

let balance = 10000;
let pinCode = 1234;


let askPinCode = await inquirer.prompt([
    {message:"Please Enter Your PinCode",type:"number",name:"askPin_Code"}
])

if(askPinCode.askPin_Code === pinCode){
    console.log(`Your Pin Code ${pinCode} is Correct`);

let  typeOFResult = await inquirer.prompt([
    {message:"What You Want Sir" , type:"list", name:"type_OFResult",choices:["Withdraw","Show_Balance","DepositeCash","Change_Pin_Code"]}
])


if(typeOFResult.type_OFResult === "Withdraw"){
    let wantAmount = await inquirer.prompt([
        {message:"How Much Amount You Want To Cash From Your Acount",type:"number",name:"want_Amount"}
    ]);


    if(wantAmount.want_Amount <= balance){
     
    
    balance -= wantAmount.want_Amount;
    console.log(`Your ${wantAmount.want_Amount}$ Withdraw has complete`)
    console.log(`And Your Remaining Balnace is ${balance}$`)
    console.log("\nTake Out Your Reciept")

}else{
    console.log(`Sorry Sir You Don't Have Enough Balace In Your Acount`)
};




}
else if(typeOFResult.type_OFResult === "Show_Balance"){
   console.log(` Sir Your Current Balance is ${balance}$`)
}

else if(typeOFResult.type_OFResult === "DepositeCash"){

    let askDepositeCash = await inquirer.prompt({
        message:"How Much Amount You Want To Deposiit in Your Account",type:"number",name:"Deposite_Cash",
    })



    balance += askDepositeCash.Deposite_Cash;

    console.log(`Procees Complete Successfully : Your Deposite Cash is ${askDepositeCash.Deposite_Cash}`);
    console.log("\nTake Out Your Reciept")
}
else if(typeOFResult.type_OFResult === "Change_Pin_Code"){

    let askPin_Code001 = await inquirer.prompt([{
        message:"Do You Really Want To Change Your Pin Code",type:"list",name:"confirm",choices:["Yes","No"]
    }]);

    if(askPin_Code001.confirm === "Yes"){
        const askPin_Yes = await inquirer.prompt({
            message:"Please ReEnter Your Previous Pin Code",type:"number",name:"CorrectPinCode"
        });


        if(askPin_Yes.CorrectPinCode === pinCode){
            const wantPinCode = await inquirer.prompt({
                message:"Write Your New PinCode At Least 4 digit",type:"input",name:"wantPinSave"
            })

          
            
            if(askPin_Yes.CorrectPinCode === pinCode){
                const wantPinCodeConfirm = await inquirer.prompt({
                    message:"Write Your Confirm  PinCode",type:"input",name:"wantPinSaveConfirm"
                });
            
           
            if(wantPinCode.wantPinSave === wantPinCodeConfirm.wantPinSaveConfirm){
               
                pinCode = wantPinCodeConfirm.wantPinSaveConfirm;

                console.log(`\nYour New Pin Code is ${pinCode}`);

            }else{
                console.log("\n")
                console.log(`Your New Pin and Confirm Pin is not matching`)
            }
   

            }else{
                console.log("\n")
                console.log(`Your Pin Code is not Matching From Your Previous Pin Code`)
            }



        }else{
            console.log("\n")
            console.log(`Your Pin Code is not Matching From Your Previous Pin Code`)
        }


        console.log("\n")
       
    }
   
    else{
        if(askPinCode.askPin_Code === pinCode){
            console.log(`Your Pin Code ${pinCode} is Correct`);
        
        let  typeOFResult = await inquirer.prompt([
            {message:"What You Want Sir" , type:"list", name:"type_OFResult",choices:["Withdraw","Show_Balance","DepositeCash","Change_Pin_Code"]}
        ])
        
        
        if(typeOFResult.type_OFResult === "Withdraw"){
            let wantAmount = await inquirer.prompt([
                {message:"How Much Amount You Want To Cash From Your Acount",type:"number",name:"want_Amount"}
            ]);
        
        
            if(wantAmount.want_Amount <= balance){
             
            
            balance -= wantAmount.want_Amount;
            console.log(`Your ${wantAmount.want_Amount}$ Withdraw has complete`)
            console.log(`And Your Remaining Balnace is ${balance}$`)
            console.log("\nTake Out Your Reciept")
        
        }else{
            console.log(`Sorry Sir You Don't Have Enough Balace In Your Acount`)
        };
        
        
        
        
        }
        else if(typeOFResult.type_OFResult === "Show_Balance"){
           console.log(` Sir Your Current Balance is ${balance}$`)
        }
        
        else if(typeOFResult.type_OFResult === "DepositeCash"){
        
            let askDepositeCash = await inquirer.prompt({
                message:"How Much Amount You Want To Deposiit in Your Account",type:"number",name:"Deposite_Cash",
            })
        
        
        
            balance += askDepositeCash.Deposite_Cash;
        
            console.log(`Procees Complete Successfully : Your Deposite Cash is ${askDepositeCash.Deposite_Cash}`);
            console.log("\nTake Out Your Reciept")
        }
        else if(typeOFResult.type_OFResult === "Change_Pin_Code"){
        
            let askPin_Code001 = await inquirer.prompt([{
                message:"Do You Really Want To Change Your Pin Code",type:"list",name:"confirm",choices:["Yes","No"]
            }]);
        
            if(askPin_Code001.confirm === "Yes"){
                const askPin_Yes = await inquirer.prompt({
                    message:"Please ReEnter Your Previous Pin Code",type:"number",name:"CorrectPinCode"
                });
        
        
                if(askPin_Yes.CorrectPinCode === pinCode){
                    const wantPinCode = await inquirer.prompt({
                        message:"Write Your New PinCode At Least 4 digit",type:"input",name:"wantPinSave"
                    })
        
                  
                    
                    if(askPin_Yes.CorrectPinCode === pinCode){
                        const wantPinCodeConfirm = await inquirer.prompt({
                            message:"Write Your Confirm  PinCode",type:"input",name:"wantPinSaveConfirm"
                        });
                    
                   
                    if(wantPinCode.wantPinSave === wantPinCodeConfirm.wantPinSaveConfirm){
                       
                        pinCode = wantPinCodeConfirm.wantPinSaveConfirm;
        
                        console.log(`\nYour New Pin Code is ${pinCode}`);
        
                    }else{
                        console.log(`Your New Pin and Confirm Pin is not matching`)
                    }
           
        
                    }else{
                        console.log(`Your Pin Code is not Matching From Your Previous Pin Code`)
                    }
        
        
        
                }else{
                    console.log(`Your Pin Code is not Matching From Your Previous Pin Code`)
                }
        
        
        
            }
                
            
        
        }
        
        
        
        }
        
        
        
        
        else{
            console.log("Wrong!! 'Please Type Your Correct PinCode'")
        
           
                console.log("\nIf You Don't Remember Your Pin Code You Call to bank HelpLine Number");
         
        }
        
        
        
        
    }
    

}

}




else{
    console.log("\n")
    console.log("Wrong!! 'Please Type Your Correct PinCode'")

   
        console.log("\nIf You Don't Remember Your Pin Code You Call to bank HelpLine Number");
 
}



