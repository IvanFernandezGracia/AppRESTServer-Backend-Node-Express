# App RESTServer
Rest server that allows to make a CRUD of users, categories and products. Users are authenticated from mongo db and Google Sign in. Requests are authorized through JWT. Implements file upload to mongoDB and images to cloudinary. Node, Express, ErrorHandler, encrypted passwords, MongoDB, ODM Mongoose, Request Validation, Logic Class ES6 Models and heroko deploy are used.

## DataBase
![WhatsApp Image 2022-02-07 at 00 18 06](https://user-images.githubusercontent.com/48660555/152719177-9ade9d6a-46b7-49be-a608-fdc0e6f22243.jpeg)

## Tech
<img src="https://user-images.githubusercontent.com/48660555/152720019-a609ac81-4e28-4925-9fe9-988aaac74646.jpg" width=30% > <img src="https://user-images.githubusercontent.com/48660555/152720020-5187273c-a935-4b9b-ba9f-6b3a39513e71.png" width=30% > <img src="https://user-images.githubusercontent.com/48660555/152720022-fd19e8dc-5d65-46c8-933f-ee15c2ad10df.png" width=30% > <img src="https://user-images.githubusercontent.com/48660555/152720024-4f08b989-fa50-4a4d-a6c0-030489911ca2.png" width=30% >



## Structure Folder Project 
![image](https://user-images.githubusercontent.com/48660555/152716159-897ce751-6f23-4364-bcb4-5bb5a8325251.png)

<!-- Tech -->
## Skills
<table>
  <tbody>
    <tr>
      <th align="center">WebServer</th>
      <th align="center">Config init RESTServer</th>  
      <th align="center">ErrorHandler&Password</th>      
      <th align="center">DataBase MongoDB </th>      
    </tr>
    <td>
        <ul>
          <li>HTTP Server</li>
          <li>Front content static</li>
          <li>Config Express</li>
          <li>Router Express CRUD Structure</li>
          <li>Request & Response</li>
          <li>req.body</li>
          <li>req.params</li>
          <li>req.header</li>
          <li>__dirname</li>
          <li>sendFile</li>
          <li>writeHead()</li>
          <li>write()</li>
          <li>HandlebarsHBS</li>
          <li>Structure Folder Project</li>
          <li>npm start confg</li>
          <li>http-server</li>
          <li>Dotenv</li>
          <li>Cors</li>
        </ul>
     </td>    
     <td>
         <ul>
          <li>npm init -Y</li>
          <li>Logic Class</li>
          <li>Port Listener</li>
          <li>Middelware(use)</li>
          <li>GET - PUT - POST - DELETE</li>
          <li>Code Response res.status(XXX)</li>
          <li>res.json({})</li>
          <li>res.send(file)</li>
          <li>CORS Middleware</li>
          <li>Folder controller & router</li>
          <li>Params & Query in router</li>
          <li>POST Postman: raw - json</li>
          <li>Git tag- release</li>
          <li>Enviroment Postman {{var}}</li>
          <li>Postman Code Request </li>
          <li>Parseo Body .Json</li>
        </ul>
     </td>
     <td>
        <ul>
          <li>{response,request}=("express")</li>
          <li>Middelare handleErrors</li>
          <li>(err, req, res, next)=>{resp or next()}</li>
          <li>require("http-errors");</li>
          <li>Try-catch into controller</li>
          <li>ParseJwt base64</li>
          <li>crypt password</li>
          <li>bcryptjs.hashSync</li>
          <li>bcryptjs.compareSync</li>
        </ul>
     </td>
     <td>
        <ul>
          <li>ODM: Mongoose</li>
          <li>Config DataBase Mongo</li>
          <li>Mongo Atlas</li>
          <li>Mongo DB Compass</li>
          <li>Schema Mongoose</li>
          <li>Schema.methods.toJSON</li>
          <li>Schema.findOne</li>
          <li>Schema.findById</li>
          <li>Schema.countDocuments</li>
          <li>Schema.find(query)</li>
          <li>Schema.skip</li>
          <li>Schema.limit</li>
          <li>Schema.save()</li>
          <li>Schema.findByIdAndUpdate</li>
          <li>Delete Property Schema</li>
          <li>Promise all [Scheme.method()]</li>
          <li>Relations between Schemas</li>
          <li>Schema.Types.ObjectId</li>
          <li>Search</li>
          <li>.populate("Schema", "Prop")</li>
          <li>ObjectId.isValid(idMongo?)</li>
        </ul>
     </td>
  </tbody>
</table>
<table>
  <tbody>
     <tr>
      <th align="center">Validations Request</th>           
      <th align="center">JWT</th>  
      <th align="center">Google Sign In</th>      
    </tr>
    <td>
        <ul>
          <li>Express-validator</li>
          <li>Role Validate</li>
          <li>Schema ID Exist Validate DB</li>
          <li>check()</li>
          <li>check().custom</li>
          <li>check().isMongoId()</li>
          <li>check().not().isEmpty()</li>
          <li>check().isLength</li>
          <li>check().isEmail()</li>
          <li>Validate only role</li>
          <li>Validate multiple roles</li>
        </ul>
     </td>    
     <td>
         <ul>
          <li>Route Login(Auth)</li>
          <li>Protection routes whit Token</li>
          <li>Read Payload</li>
          <li>LocalStorage</li>
          <li>SesionStorage</li>
          <li>jwt.io</li>
          <li>npm json web token</li>
          <li>uid identificate db</li>
          <li>Secret private key</li>
          <li>Validate JWT Backend</li>
          <li>jwt.verify(TOKEN,PRIVKEY)</li>
          <li>req.header("name")</li>
          <li>Middleware : req=>req=>req</li>
          <li>index.js (optimizate code)</li>
          <li>Structure JWT</li>
          <li>{header,payload,signature}</li>
          <li>Parse JWT</li>
          <li>Generate Jwt Primise</li>
          <li>jwt.sign(pl,pk,[opt,call])</li>
          <li>Middleware validarJWT</li>
        </ul>
     </td>
     <td>
        <ul>
          <li>Google SignIn Front-Back</li>
          <li>Google Identify Service</li>
          <li>API Key de Google</li>
          <li>API Secret Google</li>
          <li>Validation token google</li>
          <li>Oauth2.0</li>
          <li>google-auth-library</li>
          <li>Property token google</li>
          <li>googleVerify(id_token)</li>
          <li>Router google</li>
          <li>onSignIn(googleUser)</li>
          <li>.getAuthResponse().id_token</li>
          <li>signOut()</li>
        </ul>
     </td>
  </tbody>
</table>
<table>
  <tbody>
     <tr>
      <th align="center">Logic Model Class</th>
      <th align="center">Upload Files</th>  
      <th align="center">Heroku</th>      
    </tr>
    <td>
        <ul>
          <li>CRUD categorías</li>
          <li>CRUD productos</li>
          <li>Relation U-C-P</li>
          <li>RegExp</li>
          <li>Switch</li>
          <li>Search DB</li>
        </ul>
     </td>    
     <td>
         <ul>
          <li>File Upload</li>
          <li>File validations</li>
          <li>Relocate files</li>
          <li>Update user photo</li>
          <li>Delete files</li>
          <li>Display images</li>
          <li>Protect  images</li>
          <li>Middleware resp.file</li>
          <li>Folder Uploads Server</li>
          <li>Validation extension</li>
          <li>uuid library</li>
          <li>Image Default (static)</li>
          <li>app.use.fileUpload()</li>
          <li>require("path")</li>
          <li>require("fs")</li>
          <li>Cloudinary</li>
          <li>require("cloudinary").v2</li>
          <li>CLOUDINARY_URL</li>
          <li>cloudinary.uploader.upload</li>
          <li>tempFilePath</li>
          <li>secure_url</li>
          <li>fie.mv</li>
       </ul>
     </td>
     <td>
        <ul>
          <li>Git + Heroku Deploy</li>
          <li>Heroku CLI</li>
          <li>Config set .env</li>
          <li>logs -h 100 --tail</li>
          <li>Console Heroku</li>
        </ul>
     </td>
  </tbody>
</table>

## Postman
CRUD Auth  
https://documenter.getpostman.com/view/12007714/UVXqEske   
CRUD Usuarios  
https://documenter.getpostman.com/view/12007714/UVXqEskc  
CRUD Categorias  
https://documenter.getpostman.com/view/12007714/UVeGs6YQ  
CRUD Uploads  
https://documenter.getpostman.com/view/12007714/UVeGs6co  

<!-- CONTACT -->
## Contact
Ivan Alejandro Fernandez Gracia  
:email: ivan.fernandez.g@usach.cl  
:telephone_receiver: +56-961214718  
Fullstack & Mobile Developer  
Mechanical Engineering  
Universidad de Santiago de Chile
