

This is my first bootstrapped project , so I will be including the 
bootstrap by means of , 
  a local bundeled file , as opposed to using the online CDM , just linking 
  the bootstrap online.  

  After I make this project into a local file bootstrap , I will be then packaging this 
  into a Node Application , to there will be more builders afterwards , and I require
  all of my code to be in local  my file as much as possible. 


Installing Bootstrap Locally. 
----------------------------------------------------------------

1.  npm init -y        --- assuming you have made a index.html file ,  
2.  npm install bootstrap --save-dev --global

the bootstrap source code for the full css bootstrap , 
as well as the JavaScrip Boot strap , 

will be in this folder , in node_modules , 
node_modules/bootstrap/dist/js/ 

You can then replace the links , with the built bootstrap local file. 
- - You also can just keep these files , keep them linked , and delete everything else to improve 
performance. 

<link href="node_modules/bootstrap/dist/css/bootstrap.min.css" type="text/css" rel="stylesheet" >
 <link href="bootstrap.min.css" type="text/css" rel="stylesheet" >


   <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"  async defer ></script> 
     <script src=bootstrap.bundle.js"  async defer ></script> 



     after the bootstrap is built in a node module , those are 
     the files that contain everything needed.   
     ---The files can then just be moved out of the directory , and then 
     all of the other files deleted.  

------------------------------------------------------------------
Installing Bootstrap via CDN ( Online )

=== To install via a online package , through the CDN , 
you can simply replace the JavaScript script  link , 
and the CSS link, too  bootstraps CDN 
Step 1.   replace .css link , too the CDN link. 
   - delete previous .css link ( or keep ,  ) , 
   add this link to the top of your HTML page.
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
 
 2. , do the same thing for your JavaScript , (  or keep it )
 but add this script tag to import the JavaScript via CDN

place this sript tag at the bottom of the html page , right before the closing 
body tag. 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
 
 Now the bootstrap classes should be on the page and ready. 
 ----------------------------------------------------------------------------














