# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super in a Ruby class allows you to pass information/capabilities from a parent class into a child class

Researched answer: Calling super in a Ruby class allows information and behavior to pass from a parent class into a child class. 
There are a few benefits to this aside from the obvious! Other than inheritance and reusability, calling super also allows behavior to be manipulated and used in different ways in a subclass, and also allows a super behavior to override a same named subclass behavior.

2. What is a gem?

Your answer: A gem is a Ruby package manager! Different gems allow for different functionality.

Researched answer: RubyGems is a packaging system with various libraries of pre-made, task-based codes. The gems themselves are the packages or libraries, and accessing them in the command line typically starts with $gem. A great example of a ruby gem is the rails gems we're using! You can explore and download more gems on RubyGems.org or GitHub, and see which ones you have with $gems list. Documentation for your gems can be found with $ri <name of gem>

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database which stores information based on how it relates to other information. 

Researched answer: In a relational database, information is stored in a table with rows and columns and relationship between different tables are controlled through keys like the primary and foreign keys we're most familiar with. Some other types of databases are hierarchical databases, like the storage in Google Drive; object-oriented databases, kind of like the blocks Notion uses, and time-series databases which are organized around time-based data, like the databases in Kronos.

4. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is an identifier assigned to a class variable in Active Record/Rails. This automatically occurs, and can be used when creating associations to link different class instances.

Researched answer: A primary key is an automatically assigned unique identifier, allowing a specific database entry to be reliably accessed. This is important in indexing, maintaining consistency, and like we were talking about earlier, for creating relationships between different tables in a database.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The five http verbs are post (corresponds with create), get (read), patch/repair (update) and destroy (delete)

Researched answer: The five http verbs are get, post, put and patch, and delete. Post is a creation method, get is a read method. Put and patch are both update methods, and differ in that put entirely replaces data while patch partially replaces data. Delete is a method which removes data.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validations make sure that the data introduced is clean and valid.

2. RESTful routes: RESTful routes ties CRUD operation in apps to HTTP verbs and controller actions. 

3. ERB: ERB is embedded ruby, and lets you use HTML and Ruby together.

4. Params: Similar to with functions, params in rails let us pass a value in. Here, params help us pass info to our route or app address. 

5. API: An application programming interface, or API, is a middle-man between different apps transmitting JSON style data.
