# Noteworthy Features

### Gems In Use
- `RocketPants` to make exposing correct responses simpler and easier.
- `ActiveModel::Serializer` to handle filtering exposable data.

### Session
- Implements frontend session validation with use of custom created backend session management.
- FE Router utilizes `onEnter` callbacks to redirect or allow access to FE routes accordingly.

### Accounts
- Utilizes Single Table Inheritance to differentiate `Personal` accounts from `TeamWide` accounts.
- Utilizes `BCrypt` to generate `password_digest`, once again - all done manually without a gem like `Devise`.

### Businesses
- Integrates soft deletion with a default scope.
