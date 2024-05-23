package predicate;

import model.Account;
import model.Person;

public class PredicateAccountsByOwnerName implements AccountPredicate {
    String name;

    public PredicateAccountsByOwnerName(Person name) {
        this.name = String.valueOf(name);
    }

    @Override
    public boolean test(Account account) {
        return account.getOwner().getName().equals(name);
    }
}
