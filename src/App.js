import './index.css';
import { Header } from './Header';
import { Mastermind } from './Mastermind';
import { CollaboratorsBar } from './CollaboratorsBar';
import { CollaboratorContent } from './CollaboratorContent';
export function App() {
  return (
    <div>
      <Header />
      <Mastermind />
      <CollaboratorsBar />
      <CollaboratorContent />
    </div>
  );
}
