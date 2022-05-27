Course repository for the ArtStore app created on .Net 6.0 and Angular 12:
C# || TypeScript || HTML || SCSS || JavaScript

What is covered:
.Net Core
Angular
C# Generics
Repository and Unit of Work Pattern
Specification Pattern
Caching
Angular Lazy loading
Angular Routing
Angular Reactive Forms
Angular Creating a MultiStep form wizard
Accepting payments using Stripe
Angular Re-usable form components
Angular validation and async validation

Setting up the developer environment
Creating a multi project .net core application using the dotnet CLI
Creating a client side front-end Angular UI for the store using the Angular CLI
Use of the Repository, Unit of Work and specification pattern in .net core
Using multiple DbContext as context boundaries
Using ASP.NET Identity for login and registration
Using the angular modules to create lazy loaded routes.
Using Automapper in ASP.NET Core
Using Bootstrap
Making reusable form components using Angular Reactive forms
Paging, Sorting, Searching and Filtering
Using Redis to store the shopping basket
Creating orders from the shopping basket
Accepting payments via Stripe using the new EU standards for 3D secure
Publishing the application to Linux

git add .
git commit -m "End of Section 6"
git push origin master

npm install -g @angular/cli
npm install -g npm@8.11.0
ng new client --strict false
ng serve

npm install ngx-bootstrap
npm install bootstrap@5.1.3
npm install font-awesome

Create a folder for project
In the colder at the directory path, type cmd
It will open a command propmt then type: code .
It will open VS code in the directory.
Install C#
Install C# Extentions
Install NuGet Gallery
Install SQLite
Install NodeJS

dotnet tool install --global dotnet-ef --version 6.0.5
dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef migrations add InitialCreate -o Data/Migrations

Then create a solution with command: dotnet new snl
Then create a Web API with command: dotnet new webapi -o API