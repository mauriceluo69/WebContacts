from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'addrList.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'default.views.getList'),
    url(r'^add/$', 'default.views.addList'),
    url(r'^update/$', 'default.views.updateList'),
    url(r'^del/$', 'default.views.delList'),
    url(r'^account/login/$', 'default.views._login'),
    url(r'^account/logout/$', 'default.views._logout'),
]
