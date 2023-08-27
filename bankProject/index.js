let sbiAccount = {
      pin: 1234,
      currentBalance: 5000,
      name: "Ali sher",
      accountNumber: 37043555596,
    };

    document.getElementById("changePin").addEventListener("click", () => {
      if (validatePin()) {
        sbiAccount.pin = Number(prompt("what is your new pin"));
      }
      
    });

    document.getElementById("whithdrol").addEventListener("click", () => {
      if (validatePin()) {
        let amount = Number(prompt("how many amount withdrol"));
        if (validateCurrentAmount(amount)) {
          sbiAccount.currentBalance = sbiAccount.currentBalance - amount;
          showCurrentBalance();
        }
        
      }
      
    });

    document.getElementById("deposite").addEventListener("click", () => {
      if (validatePin()) {
        let amount = Number(prompt("how many amount deposite"));
        sbiAccount.currentBalance = sbiAccount.currentBalance + amount;
        showCurrentBalance();
      }
    });

    document.getElementById("transfer").addEventListener("click", () => {
      if (validatePin()) {
        let amount = Number(prompt("how many amount transfer"));
        if (validateCurrentAmount(amount)) {
          prompt("where are transfer many give a account number");
          sbiAccount.currentBalance = sbiAccount.currentBalance - amount;
          showCurrentBalance();
        }
      }
    });

    function validateCurrentAmount(amount) {
      return (
        sbiAccount.currentBalance >= amount ||
        alert("etna amunt aapke pass nhi he ")
      );
    }

    function validatePin() {
      let confirmPin = Number(prompt("what is your pin"));
      return confirmPin == sbiAccount.pin || alert("plese give a valid pin");
    }

    function showCurrentBalance() {
      document.getElementById(
        "balance"
      ).innerHTML = `${sbiAccount.currentBalance};`
      
    }
  