Open the index.html file.

We want the following to happen:

When we type in a teachers name, and hometown, and then click submit we want to:
  1. Get the data from the view
  2. We create a new teacher instance with that data
  3. Insert the new teacher in a store.
  4. We need to display that data

Just get it to work.  

There will be a problem which is that when you click submit, the default behavior is for the page to refresh.  We don't want that to happen.  We need to prevent the default behavior of refreshing.

Here is how we do that...
[Click this](https://api.jquery.com/event.preventdefault/)
