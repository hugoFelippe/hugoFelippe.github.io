<script>
    import { Router, Route } from 'svero';
    
    import Index from './pages/Index.svelte';

</script>

<Router>
    <Route fallback path="*"><h1>Not found</h1></Route>
    <Route exact path="/" component={Index} />
</Router>
