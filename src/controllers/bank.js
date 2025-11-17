import { BankService } from "../service/bank.js";

export const checkBalanceController = async (req, res) => {
  const { userId } = req.params;

  try {
    const aa = new BankService();

    res.send(aa.checkBalance());
  } catch (e) {
    res.status(500).send(e.message);
  }
};