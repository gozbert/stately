const choo = require('choo')

const Layout = require('./views/layout')
const CaseView = require('./views/case')
const CaseListView = require('./views/case-list')
const HomeView = require('./views/home')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/ui'))
app.model(require('./models/user'))
app.model(require('./models/case'))
app.model(require('./models/case-list'))

app.router((route) => [
  route('/', Layout(HomeView)),
  route('/:workflowSlug', Layout(CaseView), [
    route('/:caseId', Layout(CaseView))
  ]),
  route('/cases', Layout(CaseListView))
])

const tree = app.start()
document.body.appendChild(tree)
