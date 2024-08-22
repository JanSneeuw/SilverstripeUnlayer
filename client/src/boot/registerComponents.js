import Injector from 'lib/Injector';
import ExampleComponent from 'components/ExampleComponent/ExampleComponent';
import UnlayerField from "../components/UnlayerField/UnlayerField";
export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
    ExampleComponent,
    UnlayerField
  });
};
