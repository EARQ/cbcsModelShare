(function() {
 var Dom = YAHOO.util.Dom, Event = YAHOO.util.Event;

   Alfresco.ABObjectFinder = function Alfresco_ABObjectFinder(htmlId, 
     currentValueHtmlId) {
   Alfresco.ABObjectFinder.superclass.constructor.call(this, htmlId,
     currentValueHtmlId);

   // Re-register with our own name
   this.name = "Alfresco.ABObjectFinder";
   Alfresco.util.ComponentManager.reregister(this);

   return this;
 };

   YAHOO.extend(Alfresco.ABObjectFinder, Alfresco.ObjectFinder, {
   _inAuthorityMode : function RTObjectSearcher__inAuthorityMode() {
   if(this.options.searchMode == "true"){
    return true;
   }else{
    return false;
  }
 },
});
})();