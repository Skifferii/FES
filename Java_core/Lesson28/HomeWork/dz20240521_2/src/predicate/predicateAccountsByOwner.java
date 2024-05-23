package predicate;

import model.Account;
import model.Person;

public class predicateAccountsByOwner implements AccountPredicate {

    Person owner;

    @Override
    public boolean test(Account account) {
        return (account.getOwner().equals(owner));
    }
}
