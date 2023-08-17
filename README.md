# backstage-sample-plugin

## Prerequisites for local backstage plugin development
Ensure the following tools are installed on your development machine.

|Tool|Version|
|----|-------|
|[Nodejs](https://nodejs.org/en)|18.x LTS|
|[Yarn Classic](https://classic.yarnpkg.com/lang/en/docs/install/)|1.22 Classic|
|[Docker Desktop](https://docs.docker.com/engine/install/)|Latest|

## Running the sample plugin
* Clone the repository and navigate to the `appeng-backstage` directory
* Run the following command and you should see a running sample plugin in browser
```shell
yarn dev
```
* Note that this is the reference application, which can be used to compare your version with the original version and to copy code into your plugin when you follow these instructions.

## How to follow the instructions
* Please follow the instructions below by going to a new empty directory such as `~/projects/backstage`.
* If you follow these instructions in the cloned copy of this repo, app creation and plug-in commands will fail as these directories `appeng-backstage` and `appeng-gh-repos` will already be existing.

## Generate a starter backstage app
* Before one can develop a plugin, you need a backstage app.
```shell
npx @backstage/create-app@latest
```

* When prompted for name use `appeng-backstage`.

* Note: You may also be prompted to install backstage create app utility installation by this command, press Y for the same.

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

* You can rerun the app with see the default implementation of plugin.
```shell
yarn dev
```

* To manually navigate to the plugin at any time in browser enter following url
```url
http://localhost:3000/appeng-gh-repos
```

* Note: You may keep the server started from command above running and perform following changes, the changes are live reloaded.

## Customizing plugin with your functionality

### Create AppengGHReposComponent
* This component will fetch and display AppEng's repositories from GitHub.
* Open the root directory of the `appeng-backstage` in an IDE like VSCode.
* Navigate to components folder `appeng-backstage/plugins/appeng-gh-repos/src/components`.
* Copy the `ExampleFetchComponent` and name it `AppengGHReposComponent`.
* Rename the following files as...

|Sr|File| Rename to|
|---|---|---|
|1|ExampleFetchComponent.tsx|AppengGHReposComponent.tsx|
|2|ExampleFetchComponent.test.tsx|AppengGHReposComponent.test.tsx|

* In `AppengGHReposComponent/AppengGHReposComponent.tsx`...
    * Change one of the emails "carolyn.moore@example.com" to "appeng@example.com".
    * We did this minor change to see later, the app uses our new component that we are creating in this step.
    * Rename function ExampleFetchComponent() to AppengGHReposComponent().

* Following this change, reflect the name accordingly in the `AppengGHReposComponent.test.tsx` and `index.ts`.

* In the `ExampleComponent/ExampleComponent.tsx` file replace line #33 from "\<ExampleFetchComponent />" to "\<AppengGHReposComponent />". Correspondingly update import statement at the top.

### Ensure AppengGHReposComponent is now being used
* When you navigate to `http://localhost:3000/appeng-gh-repos` you should see the app showing content from our `AppengReposComponent` where we made use of "appeng@example.com" email.
    * This proves that our `AppengGHReposComponent` is active.

### Adding functionality to show AppEng GitHub Repos
* Create `types` folder under `plugins/appeng-gh-repos/src`.
* Copy the `GHRepos.ts` file from the reference application code: `appeng-backstage/plugins/appeng-gh-repos/src/types` here, which defines Github repos class definitions.
* Replace the contents of...
    * `AppengGHReposComponent.tsx` with the contents from `appeng-backstage/plugins/appeng-gh-repos/src/components/AppengGHReposComponent/AppengGHReposComponent.tsx` 
    * `ExampleComponent.tsx` file with the contents from `appeng-backstage/plugins/appeng-gh-repos/src/components/ExampleComponent/ExampleComponent.tsx`.
* You should see the AppEng Github repositories displayed.