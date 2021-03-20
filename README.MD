# [BACK](https://github.com/bonnysid/lessons-branches/tree/main)
# Spring core

## Annotations:
- **@Configuration** - show to spring: this class is config
```java
@Configuration
public class SpringConfig {}
```
- **@Bean** - create bean
```java
@Configuration
@ComponentScan("org.bloom")
@PropertySource("classpath:musicPlayer.properties")
public class SpringConfig {

    @Bean
    public List<MusicGenres> musicalGenres() {
        return new ArrayList<>(Arrays.asList(MusicGenres.CLASSIC, MusicGenres.HIP_HOP, MusicGenres.ROCK));
    }
}
```
- **@Component** - show to spring: this class is component
```java
@Component
public class Computer {}
```
- **@ComponentScan(<_path of package_>)** - search all **@Components** in selected path
```java
@Configuration
@ComponentScan("org.bloom")
public class SpringConfig {
}
```
- **@PropertySource("classpath:<_path of props_>")** - import props to **@Value**
```java
@Configuration
@PropertySource("classpath:musicPlayer.properties")
public class SpringConfig {}
```
- **@Qualifier(<_name of class_>)** - insert in prop selected class instance
```java
    @Autowired
    public MusicPlayer(@Qualifier("classicMusic") Music classicMusic,
                       @Qualifier("rockMusic") Music rockMusic,
                       @Qualifier("hipHopMusic") Music hipHopMusic,
                       List<MusicGenres> defaultGenres) {
        this.classicMusic = classicMusic;
        this.rockMusic = rockMusic;
        this.hipHopMusic = hipHopMusic;
        this.defaultGenres = defaultGenres;
        this.musics = new ArrayList<>(Arrays.asList(classicMusic, rockMusic, hipHopMusic));
    }
```
- **@Value(${<_value from props_>})** - set value from props
```java
    @Value("${musicPlayer.name}")
    private String name;
    @Value("${musicPlayer.volume}")
    private int volume;
```
- **@Autowired** - show to spring where he need insert props to field/method/constructor
```java
public class Computer {
    @Autowired
    private MusicPlayer musicPlayer;
}
```
```java
public class Computer {
    @Autowired
    public Computer(MusicPlayer musicPlayer) {
        id = Computer.lastId++;
        this.musicPlayer = musicPlayer;
    }
}
```
```java
    @Autowired
    public void setName(String name) {
            this.name = name;
    }
```
- **@Scope("prototype/singleton")** - add object to map or not
- **@PostConstruct** - call this method after create the instance
```java
    @PostConstruct
    public void doInit() {
        System.out.println("Music Player creating...");
    }
```

- **@PreDestroy** - call this method before destroy the instance
```java
    @PreDestroy
    public void doDestroy() {
        System.out.println("Music Player destroying...");
    }
```

## XML Tags:
- **bean** _(props: id, name, class, scope, init-method, destroy-method, factory-bean, factory-method, autowired, primary)_
Props:
- id / name - name of bean
- class - init java class to bean
- scope ("singleton"/"prototype") - set singleton bean or prototype
- init-method - method of class whose will be invoke after the creation bean
- destroy-method - method of class whose will be invoke before the destroying bean
- factory-bean - bean whose has a factory method
- factory-method - method whose create a instance of class
- autowired ("byName"/"byType"/"default"/"no") - search bean for ref to this class
- primary("true"/"false") - primary bean for autowired
```java
<bean  id="musicPlayer" 
         class="org.bloom.MusicPlayer" 
         scope="prototype" 
         init-method="doInit" 
  >
```
- **property** - setMusic --> name="music"
```java
<property name="musics" >
   <list>
       <ref bean="musicBean"/>
        <ref bean="musicBean2"/>
        <ref bean="musicBean3"/>
    </list>
</property>
```

```java
<property name="name" value="${musicPlayer.name}"/>
```
- **list**
```java
<list>
   <ref bean="musicBean"/>
    <ref bean="musicBean2"/>
    <ref bean="musicBean3"/>
</list>
```
- **constructor-arg**
```java
<constructor-arg ref/value="musicBean"/>
```
- **context:component-scan** - seatch components in package
```java
    <context:component-scan base-package="org.bloom"/>
```
- **context:property-placeholder**

```java
    <context:property-placeholder location="classpath:musicPlayer.properties"/>
```

# Spring MVC (Model View Controller)



