# backstage-sample-plugin

## Prerequisites for local backstage plugin development
Ensure the following tools are installed on your development machine.

|Tool|Version|
|----|-------|
|[Nodejs](https://nodejs.org/en)|18.x LTS|
|[Yarn Classic](https://classic.yarnpkg.com/lang/en/docs/install/)|1.22 Classic|
|[Docker Desktop](https://docs.docker.com/engine/install/)|Latest|

## Generate a starter backstage app
* Before one can develop a plugin, you need a backstage app.
```shell
npx @backstage/create-app@latest
```

* When prompted for name use `appeng-backstage`.

* Run the backstage app locally with...
```shell
yarn dev
```

## Create a Sample plugin
* Create a new plugin, be sure you are in the root directory of the `appeng-backstage`.
```shell
yarn new --select plugin
```

* When prompted for plugin id use `appeng-gh-repos`.

* You can rerun the app with and navigate to localhost/appeng-gh-repos in your browser to see default implementation of plugin.
```shell
yarn dev
```

* Note: You may keep the server started from command above running and perform following changes, the changes are live reloaded.

## Customizing plugin with your functionality

### Create AppengGHReposComponent 
* Open the root directory of the `appeng-backstage` in IDE like VSCode.
* Navigate to components folder `appeng-backstage/plugins/appeng-gh-repos/src/components`.
* Copy the `ExampleFetchComponent` and name it AppengGHReposComponent.
* Rename the following files as...

|File| Rename to|
|----|---|
|ExampleFetchComponent.tsx|AppengGHReposComponent.tsx|
|ExampleFetchComponent.test.tsx|AppengGHReposComponent.test.tsx|

* In `AppengGHReposComponent/AppengGHReposComponent.tsx`...
    * Change one of the emails "carolyn.moore@example.com" to "appeng@example.com"
    * Rename function ExampleFetchComponent() to AppengGHReposComponent().

* Following this change reflect the name accordingly in the AppengGHReposComponent.test.tsx and index.ts.

* In the `ExampleComponent/ExampleComponent.tsx` file replace line #33 from "\<ExampleFetchComponent />" to "\<AppengGHReposComponent />". Correspondigly update import statement at the top.

### Ensure AppengGHReposComponent is now being used
* When you navigate to http://localhost:3000/appeng-gh-repos you should see our AppengReposComponent showing "appeng@example.com" email.
    * This proves that our AppengGHReposComponent is active.

### Adding functionality to show AppEng GitHub Repos
* Create types folder under plugins/appeng-gh-repos/src.
* Copy the GHRepos.ts file here, which defines Github repos class definitions.
* Replace the contents of AppengGHReposComponent.tsx and ExampleComponent.tsx file with the corresponding files.
* You should see the AppEng Github repositories displayed.




