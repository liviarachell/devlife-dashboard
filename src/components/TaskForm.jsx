import {useState} from 'react';

function TaskForm({onAdicionarTarefa}) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudos");
  const [prioridade, setPrioridade] = useState("media");

  function aoEnviar(e) {
    e.preventDefault();
    if (titulo.trim() === "") 
    onAdicionarTarefa({titulo, categoria, prioridade});
    setTitulo("");
  }

  return (
    <form 
        onSubmit={aoEnviar}
        className="bg-white rounded-xl shadow-md p-5 mb-8 items-end flex flax-wrap gap-4">
            <div className="min-w-[300px] flex-1">
                <label>Nova tarefa </label>
                <input type="text" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="O que precisa ser feito?"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
                <label className="block text-sm font-semibold text-slate-300">Categoria</label>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} 
                className="border border-slate-300 rounded-lg px-3 py-2">
                    <option> Estudos </option>
                    <option> Projeto </option>
                    <option> Saúde </option>
                    <option> Pessoal </option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-semibold text-slate-300">Prioridade</label>
                <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2">
                    <option value="alta"> Alta </option>
                    <option value="media"> Média </option>
                    <option value="baixa"> Baixa </option>
                </select>
            </div>
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 transition-colors">
                Adicionar
            </button>
        </form>
    );  
}

export default TaskForm;