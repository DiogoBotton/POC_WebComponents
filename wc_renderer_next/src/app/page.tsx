import { Widget } from "@/components/Widget"

export default function Home() {
  const widgets = [
    {
      src: "https://diogobotton.github.io/POC_WebComponents/hello-world.js", tag: "hello-world"
    },
    {
      src: "https://diogobotton.github.io/POC_WebComponents/widget.es.js", tag: "portfolio-widget", name: "Diogo Botton", githubUrl: "https://github.com/DiogoBotton"
    }
  ]

  return (
    <div>
      <h1>Home</h1>

      {widgets.map((w, i) => (
        <Widget key={i} src={w.src} tag={w.tag} name={w.name} githubUrl={w.githubUrl} />
      ))}
    </div>
  )
}