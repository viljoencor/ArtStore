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