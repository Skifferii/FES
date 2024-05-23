package predicate;

import model.Account;

public class PredicateAccountByGivenLimit implements AccountPredicate {
    private double limitBalance;

    public PredicateAccountByGivenLimit (double limitBalance) {
        this.limitBalance =limitBalance;
    }


    public boolean test(Account account) {
        return account.getBalance()>limitBalance;
    }
}
