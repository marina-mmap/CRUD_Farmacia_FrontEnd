import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: string;
  preco: boolean | null;
  foto: string;
  usuario: Usuario | null;
  categoria : Categoria | null;
}