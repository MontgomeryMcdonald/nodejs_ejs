#ATTRIBUTES
<%= %>          Outputs escaped content, ie, <%=title%> 
<%- %>          Output unescaped HTML (such as partials), ie, <%- Include("partials/header") %>
<% %>           Runs JS logic without output, ie, <% students.forEach(..)%>