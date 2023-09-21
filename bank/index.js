class Account {
  //account naam ka obj banaya
  constructor(
    accountHolderName,
    accountType,
    aadharCardNumber,
    mobileNumber,
    pin
  ) {
    //iss me constructor function banaya aur is mai obj ki key declair ki
    this._accountHolderName = accountHolderName;
    this._accountType = accountType;
    this._aadharCardNumber = aadharCardNumber;
    this._currentBalance = 1000;
    this._transactions = []; //statment ke liye
    this._mobileNumber = mobileNumber;
    this._pin = pin;
  }

  get accountHolderName() {
    return this._accountHolderName;
  }

  set accountHolderName(name) {
    this._accountHolderName = name;
  }

  get accountType() {
    return this._accountType;
  }
  set accountType(Type) {
    this.accountType = Type;
  }
  withdrawal(pin, amount) {
    if (pin === this._pin) {
      if (amount > 0 && amount <= this._currentBalance) {
        this._currentBalance -= amount;
        this._transactions.push(`Withdrawal: -${amount}`);
        return `Withdrawal of ${amount} successful. New balance: ${this._currentBalance}`;
      } else {
        return "Invalid withdrawal amount or insufficient balance.";
      }
    } else {
      return "Incorrect PIN. Withdrawal failed.";
    }
  }

  deposit(pin, amount) {
    if (pin === this._pin) {
      if (amount > 0) {
        this._currentBalance += amount;
        this._transactions.push(`Deposit: +${amount}`);
        return `Deposit of ${amount} successful. New balance: ${this._currentBalance}`;
      } else {
        return "Invalid deposit amount.";
      }
    } else {
      return "Incorrect PIN. Deposit failed.";
    }
  }

  pinChange(oldPin, newPin, confirmNewPin) {
    if (oldPin === this._pin && newPin === confirmNewPin) {
      this._pin = newPin;
      return "PIN changed successfully.";
    } else {
      return "PIN change failed. Please check your old and new PIN.";
    }
  }

  printStatement(pin) {
    if (pin === this._pin) {
      return this._transactions.join("\n");
    } else {
      return "Incorrect PIN. Cannot print statement.";
    }
  }
}

let currentAccount = null;

function checkPin() {
  const pinInput = document.getElementById("pin");
  const enteredPin = pinInput.value;

  

  if (enteredPin === currentAccount._pin) {
    pinInput.value = "";
    document.getElementById("accountDetails").style.display = "block"; //pin correct hoga toh Account Detail page ko display krega
    document.getElementById("accountHolderName").textContent =
      "Account Holder Name: " + currentAccount.accountHolderName;
    document.getElementById("accountType").textContent =
      "Account Type: " + currentAccount.accountType;
    document.getElementById("aadharCardNumber").textContent =
      "Aadhar Card Number: " + currentAccount._aadharCardNumber;
    document.getElementById("currentBalance").textContent =
      "Current Balance: " + currentAccount._currentBalance;
  } else {
    alert("Incorrect PIN. Please try again.");
  }
}

function withdrawal() {
  const pin = prompt("Enter your PIN:");
  if (pin === currentAccount._pin) {
    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (amount) {
      const result = currentAccount.withdrawal(pin, amount); //result mai withdrawal fun declair kiya
      alert(result); //aur result ko alert me print kiya
      document.getElementById("currentBalance").textContent =
        "Current Balance: " + currentAccount._currentBalance; //account detail mai balance ko update krga
    } else {
      alert("Invalid amount entered.");
    }
  } else {
    alert("Incorrect PIN. Withdrawal failed.");
  }
}

function deposit() {
  const pin = prompt("Enter your PIN:");
  if (pin === currentAccount._pin) {
    const amount = parseFloat(prompt("Enter deposit amount:"));
    if (amount) {
      const result = currentAccount.deposit(pin, amount);
      alert(result);
      document.getElementById("currentBalance").textContent =
        "Current Balance: " + currentAccount._currentBalance;
    } else {
      alert("Invalid amount entered.");
    }
  } else {
    alert("Incorrect PIN. Deposit failed.");
  }
}

function printStatement() {
  const pin = prompt("Enter your PIN:");
  if (pin === currentAccount._pin) {
    const statement = currentAccount.printStatement(pin);
    if (statement) {
      alert("Transaction History:\n" + statement);
    } else {
      alert("No transactions to display.");
    }
  } else {
    alert("Incorrect PIN. Cannot print statement.");
  }
}

function changePin() {
  const oldPin = prompt("Enter your old PIN:");
  if (oldPin === currentAccount._pin) {
    const newPin = prompt("Enter your new PIN:");
    const confirmNewPin = prompt("Confirm your new PIN:");
    if (newPin === confirmNewPin) {
      const result = currentAccount.pinChange(oldPin, newPin, confirmNewPin);
      alert(result);
    } else {
      alert("New PINs do not match. PIN change failed.");
    }
  } else {
    alert("Incorrect PIN. PIN change failed.");
  }
}


currentAccount = new Account(
  "Alisher Khan",
  "Savings",
  "37043555596",
  "9649287338",
  "1212"
);
currentAccount = new Account(
  "sameer Khan",
  "Savings",
  "370435555",
  "9649287",
  "1221"
);