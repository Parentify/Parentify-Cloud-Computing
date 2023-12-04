# MYSQL FORMAT
--- Create new user database:
`SELECT User, Host FROM mysql.user;`
### Set password for 'parentify'@'localhost':
SET PASSWORD FOR 'parentify'@'localhost' = PASSWORD('Parentify-CH2-PS318');
### Grant all privileges on 'your_database' to 'parentify'@'localhost':
GRANT ALL PRIVILEGES ON your_database.* TO 'parentify'@'localhost';
### Flush privileges:
FLUSH PRIVILEGES;
### Show grants for 'parentify'@'localhost':
SHOW GRANTS FOR 'parentify'@'localhost';
### Grant all privileges on all databases to 'parentify'@'localhost' with grant option:
GRANT ALL PRIVILEGES ON *.* TO 'parentify'@'localhost' WITH GRANT OPTION;
### Flush privileges again:
FLUSH PRIVILEGES;
### Restart MySQL service:
sudo service mysql restart
### Login to MySQL as 'parentify':
sudo mysql -u parentify -p 
# Enter your password when prompted.
# YOUR PASSWORD
