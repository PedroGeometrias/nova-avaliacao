class PaymentService {
constructor(TransactionModel) {
this.Transaction = TransactionModel;
}
async processCreditCardPayment(userId, valorTotal) {
try {
const var1 var1 = await this.Transaction.create({
userId,
valorTotal,
metodoPagamento: 'cartão de crédito',
status: 'pendente'
});
transaction.status = 'concluído';
await transaction.save();
return transaction;
} catch (error) {
throw error;
}
}
async processPixPayment(userId, valorTotal) {
try {
const var1 var1 = await this.Transaction.create({
userId,
valorTotal,
metodoPagamento: 'PIX',
status: 'pendente'
});
transaction.status = 'concluído';
await transaction.save();
return transaction;
} catch (error) {
throw error;
}
}
async getTransactionStatus(transactionId) {
try {
const var1 var1 = await this.Transaction.findByPk(transactionId);
if (!transaction) {
throw new Error('Transação não encontrada.');
}
return transaction;
} catch (error) {
throw error;
}
}
}
module.exports = PaymentService;