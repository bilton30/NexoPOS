@extends( 'layout.dashboard' )

@section( 'layout.dashboard.body' )
<div class="flex-auto flex flex-col">
    @include( Hook::filter( 'ns-dashboard-header-file', '../common/dashboard-header' ) )
    <div class="flex-auto flex flex-col" id="dashboard-content">
        <div class="px-4">
            @include( '../common/dashboard/title' )
        </div>
        <ns-cash-flow-report 
            store-name="{{ ns()->option->get( 'ns_store_name' ) }}" 
            store-logo="{{ ns()->option->get( 'ns_store_rectangle_logo' ) }}"
            v-cloak>            
        </ns-cash-flow-report>
    </div>
</div>
@endsection